@Library ('Shared') _
pipeline {
    agent {
        label 'portfolio-node'
    }

    stages {
        stage('Checkout source code') {
            steps {
                script {
                    git_clone('https://github.com/ShavB/django-view-count.git', 'main')
                }
                echo 'git checkout task is completed--------------------------------------->'
            }
        }

        stage('bulding the docker image') {
            steps {
                script {
                    docker_build('shyam-portfolio', 'latest')
                }
                echo 'docker build completed!!!!!!!!!!!!!!!!!!!!!!!!!!!'
            }
        }

        stage('Pushing to Dockerhub') {
            steps {
                echo '🛠 ️This is pushing the code! to DockerHub !!!!!!!!!!!!!!!!_-------------->'
                withCredentials([usernamePassword(
                    'credentialsId': 'docker-hub-cred',
                    passwordVariable: 'dockerHubPass',
                    usernameVariable: 'dockerhubUser')
                ]) {
                    sh """
                    docker login -u ${env.dockerhubUser} -p ${env.dockerHubPass}
                    docker image tag shyam-portfolio:latest shavbb/shyam-portfolio:latest
                    docker push ${env.dockerhubUser}/shyam-portfolio:latest
                    """
                }
                echo 'This is pushing the code! to DockerHub !!!!!!!!!!!!!!!!_-------------->'
            }
        }
        stage('deploy') {
            steps {
                echo 'This is deploying the code!'
                sh 'docker compose up -d'
            }
        }
    }
}
