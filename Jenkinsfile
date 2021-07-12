pipeline {
  agent any
  stages {
    stage('Статический анализ кода') {
      steps {
        echo 'Статический анализ кода'
      }
    }

    stage('Тесты') {
      steps {
        echo 'Test report'
        echo 'Test coverage'
      }
    }

    stage('Сборка проекта') {
      steps {
        echo 'Build'
      }
    }
  }
}
