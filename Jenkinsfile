pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_NAME_SERVER = 'ilhemamirii/backend-article'
        IMAGE_NAME_CLIENT = 'ilhemamirii/frontend-article'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/IlhemAmiri/mern-article.git',
                    credentialsId: 'github'
            }
        }
        stage('Build Server Image') {
            steps {
                dir('backend-article') {
                    script {
                        sh 'docker build -t ${IMAGE_NAME_SERVER} .'
                    }
                }
            }
        }
        stage('Build Client Image') {
            steps {
                dir('frontend-article') {
                    script {
                        sh 'docker build -t ${IMAGE_NAME_CLIENT} .'
                    }
                }
            }
        }
        stage('Push Images to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('', "${DOCKERHUB_CREDENTIALS}") {
                        sh 'docker push ${IMAGE_NAME_SERVER}'
                        sh 'docker push ${IMAGE_NAME_CLIENT}'
                    }
                }
            }
        }
    }
}
