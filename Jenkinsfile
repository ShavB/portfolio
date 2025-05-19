@Library ('Shared') _
pipeline {
    agent {
        label 'portfolio-node'
    }

    stages {
        stage('Checkout source code') {
            steps {
                script {
                    git_clone('https://github.com/ShavB/portfolio.git', 'main')
                }
                echo '✅ git checkout task is completed--------------------------------------->'
            }
        }

        stage('bulding the docker image') {
            steps {
                script {
                    docker_build('portfolio-frontend', 'latest', '.')
                    docker_build('portfolio-backend', 'latest', 'backend')
                }
                echo 'docker build completed!!!!!!!!!!!!!!!!!!!!!!!!!!!'
            }
        }

        stage('Pushing to Dockerhub') {
            steps {
                echo '🛠 ️This is pushing the code! to DockerHub !!!!!!!!!!!!!!!!_-------------->'
                script {
                    docker_creds('portfolio-frontend', 'latest', 'shavbb')
                    docker_creds('portfolio-backend', 'latest', 'shavbb')
                }
                echo 'This is pushing the code! to DockerHub !!!!!!!!!!!!!!!!_-------------->'
            }
        }
        stage('deploy') {
            steps {
                sh 'docker compose down || true'
                sh 'docker compose up -d'
            }
        }
    }
}
