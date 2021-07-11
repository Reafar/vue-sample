pipeline {
  agent any
  stages {
    stage('download dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}
