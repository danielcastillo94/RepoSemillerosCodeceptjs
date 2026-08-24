
#CODECEPTJS
npx codeceptjs run --features --grep '@karelTelcel'

# ALLURE

allure generate output/allure-results --clean -o allure-report

allure open allure-report