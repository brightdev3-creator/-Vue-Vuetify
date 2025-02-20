import { execa } from 'execa'
import fs from 'fs'

async function deploy() {
  try {
    // Build the project with NODE_ENV set to production
    process.env.NODE_ENV = 'production'
    await execa('npm', ['run', 'build'])
    
    // Navigate to dist folder
    process.chdir('dist')
    
    // Initialize git and commit
    await execa('git', ['init'])
    await execa('git', ['add', '-A'])
    await execa('git', ['commit', '-m', 'deploy'])
    
    // Get current branch name
    const { stdout: branchName } = await execa('git', ['rev-parse', '--abbrev-ref', 'HEAD'])
    
    // Push to gh-pages branch
    await execa('git', [
      'push',
      '-f',
      'git@github.com-samplers:papacarp/samplerswww.git',
      `${branchName}:gh-pages`
    ])
    
    // Navigate back
    process.chdir('..')
    
    console.log('Deployment complete!')
  } catch (e) {
    console.error('Deployment failed:', e.message)
    console.error(e.stack)
  }
}

deploy() 