const {axelLiverpool} = inject();

Given(/^Ingresar a la url$/, () => {
  axelLiverpool.web();
});
