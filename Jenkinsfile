pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git url: 'https://github.com/Saurabh12Pandey/ReactDasboard-VerceL1.git', branch: "main"
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t saurabh:latest .'
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'dockerhubPass', usernameVariable: 'dockerhubUser')]) {
                    sh 'echo ${dockerhubPass} | docker login -u ${dockerhubUser} --password-stdin'
                    sh 'docker tag saurabh:latest ${dockerhubUser}/saurabh:latest'
                    sh 'docker push ${dockerhubUser}/saurabh:latest'
                }
            }
        }
        stage("deploy"){
            steps{
                sh 'docker run -d -p 3000:3000 sp8970196621/saurabh:latest'
                sh 'docker ps -a'  
                sh 'docker logs $(docker ps -q)'
            }
        }
    }
}
