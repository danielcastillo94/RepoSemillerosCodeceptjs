# Array con los nombres de archivo
files=(
    "TC001_Home_page"
    "TC002_Planes_page"
    "TC003_Plan5g"
    "TC004_Buscador"
    "TC005_Detalle_equipo"
    "TC006_Cobertura"
    "TC007_Contacto"
    "TC008_Ayuda"
    "TC009_Region"
    "TC010_footer"
    "TC011_Mobile_menu"
)

# Crear archivos .js en ambas carpetas
for file in "${files[@]}"; do
    touch "pages/${file}.js"
    touch "steps/${file}.js"
done

echo "Se crearon ${#files[@]} archivos .js en cada carpeta"
