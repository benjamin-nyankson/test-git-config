run the image file: docker-compose up

run the image file: docker-compose up -d ---in the background
<!-- sonar.token=squ_60132dae36abfd376a1267f59793185e77bd9593 -->
run sonar-scanner ---in the project

<!-- sonar.cpd.exclusions=**/*.vue,**/*.ts
 -->

 sonar-scanner \
  -Dsonar.projectKey=Amali-Tech_arms-project-management-frontend \
  -Dsonar.sources=. \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.token=squ_f422c9cee822f49dace4c0b73aff0536a6133aec 
