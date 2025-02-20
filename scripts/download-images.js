import { promises as fs } from 'fs'
import path from 'path'
import https from 'https'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

// Get __dirname equivalent in ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const IMAGE_URLS = {
  // Favicon & Logo
  'favicon2.ico': 'https://portal.samplersinc.com/favicon2.ico',
  'logo.png': 'https://portal.samplersinc.com/img/Sampler-1.5c736f74.png',
  
  // Hero Images
  'hero-image.jpg': 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca', // Product sampling event
  'about-hero.jpg': 'https://images.unsplash.com/photo-1521737711867-e3b97375f902', // Team collaboration
  'solutions-hero.jpg': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd', // Product showcase
  'services-hero.jpg': 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a', // Brand activation event
  
  'articles/article1.jpg': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  'articles/article2.jpg': 'https://images.unsplash.com/photo-1515187029135-18ee286d815b',
  'articles/article3.jpg': 'https://images.unsplash.com/photo-1517048676732-d65bc937f952',
  
  'case-studies/case1.jpg': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0',
  'case-studies/case2.jpg': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
  'case-studies/case3.jpg': 'https://images.unsplash.com/photo-1531482615713-2afd69097998',
  
  'services/brand-ambassadors.jpg': 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  'services/event-production.jpg': 'https://images.unsplash.com/photo-1511578314322-379afb476865',
  'services/analytics.jpg': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
  
  'team/ceo.jpg': 'https://images.unsplash.com/photo-1560250097-0b93528c311a',
  'team/coo.jpg': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
  'team/cto.jpg': 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4',
  
  'testimonials/person1.jpg': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
  'testimonials/person2.jpg': 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
  'testimonials/person3.jpg': 'https://images.unsplash.com/photo-1580489944761-15a19d654956'
}

const UNSPLASH_PARAMS = '?auto=format&fit=crop&w=1200&q=80'
const BASE_DIR = path.join(__dirname, '../public/images')

async function ensureDirectoryExists(filePath) {
  const dirname = path.dirname(filePath)
  try {
    await fs.access(dirname)
  } catch {
    await fs.mkdir(dirname, { recursive: true })
  }
}

function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url + UNSPLASH_PARAMS, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: ${response.statusCode}`))
        return
      }
      
      const chunks = []
      response.on('data', chunk => chunks.push(chunk))
      response.on('end', () => resolve(Buffer.concat(chunks)))
      response.on('error', reject)
    }).on('error', reject)
  })
}

async function optimizeAndSaveImage(imageBuffer, outputPath, width) {
  // Don't process .ico files
  if (outputPath.endsWith('.ico')) {
    await fs.writeFile(outputPath, imageBuffer)
    return
  }
  
  const isLogo = outputPath.includes('logo')
  
  const sharpInstance = sharp(imageBuffer)
    .resize(width, null, {
      withoutEnlargement: true,
      fit: 'contain'
    })
  
  if (isLogo) {
    if (outputPath.includes('dark')) {
      // Create dark version of logo
      await sharpInstance
        .negate() // Invert colors
        .png({
          quality: 90,
          compressionLevel: 9
        })
        .toFile(outputPath)
    } else {
      // Original white logo
      await sharpInstance
        .png({
          quality: 90,
          compressionLevel: 9
        })
        .toFile(outputPath)
    }
  } else {
    // For other images, use JPEG as before
    await sharpInstance
      .jpeg({
        quality: 80,
        progressive: true
      })
      .toFile(outputPath)
  }
}

async function processImage(relativePath, url) {
  const outputPath = path.join(BASE_DIR, relativePath)
  console.log(`Downloading: ${relativePath}`)
  
  try {
    await ensureDirectoryExists(outputPath)
    const imageBuffer = await downloadImage(url)
    
    // Determine width based on image type
    let width
    if (relativePath === 'logo.png') {
      width = 200 // or whatever width you want for the logo
    } else if (relativePath.includes('testimonials')) {
      width = 400
    } else {
      width = 1200
    }
    
    await optimizeAndSaveImage(imageBuffer, outputPath, width)
    console.log(`✓ Saved: ${relativePath}`)
  } catch (error) {
    console.error(`✗ Failed: ${relativePath}`, error)
  }
}

async function main() {
  try {
    // Ensure base directory exists
    await ensureDirectoryExists(BASE_DIR)
    
    // Process all images
    await Promise.all(
      Object.entries(IMAGE_URLS).map(([path, url]) => processImage(path, url))
    )
    
    console.log('\nAll images processed successfully!')
  } catch (error) {
    console.error('Script failed:', error)
    process.exit(1)
  }
}

main() 