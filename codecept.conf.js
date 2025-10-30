/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.telcel.com/',
      show: true,
      locale: "es-MX",
    },
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js', //TC001
    planes_page: './pages/planes_page.js', //TC002 y TC003
    buscador_page: './pages/buscador_page.js', //TC004
    detalleEquipo_page: './pages/detalleEquipo_page.js', //TC005
    cobertura_page: './pages/cobertura_page.js', //TC006
    contacto_page: './pages/contacto_page.js', //TC007
    ayuda_page: './pages/ayuda_page.js', //TC008
    region_page:'./pages/region_page.js', //TC009
    footer_page: './pages/footer_page.js', //TC010
    mobileMenu_page: './pages/mobileMenu_page.js', //TC011
    terminos_page: './pages/terminos_page.js', //TC012
  },

  plugins: {
    allure: {
      enabled: true,
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
  gherkin: {
    features: './features/**/*.feature',
    steps: [
      './steps/home_steps.js',
      './steps/planes_steps.js',
      './steps/buscador_steps.js',
      './steps/detalleEquipo_steps.js',
      './steps/cobertura_steps.js',
      './steps/contacto_steps.js',
       './steps/ayuda_steps.js',
      './steps/region_steps.js', 
      './steps/footer_steps.js',
      './steps/mobileMenu_steps.js',
       './steps/terminos_steps.js',

    ],
  },
 
  name: 'Automatizacion'
};
