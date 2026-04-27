pipeline {
    agent any

    environment {
        IMAGE_NAME = "files2-q7-app"
        CONTAINER_NAME = "files2-q7-container"
        PORT = "3005"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/bhagwatsatyam/files2_q7.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t %IMAGE_NAME% .'
            }
        }

        stage('Stop Old Container') {
            steps {
                bat 'docker rm -f %CONTAINER_NAME% || exit 0'
            }
        }

        stage('Run Container') {
            steps {
                bat 'docker run -d -p %PORT%:%PORT% --name %CONTAINER_NAME% %IMAGE_NAME%'
            }
        }

        stage('Wait for App to Start') {
            steps {
                bat 'timeout /t 5'
            }
        }

        stage('Run Test Cases') {
            steps {
                bat 'node test.js'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline executed successfully!'
        }
        failure {
            echo '❌ Pipeline failed!'
        }
    }
}