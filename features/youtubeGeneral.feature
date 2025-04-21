Feature: Validaciones funcionales en la plataforma de YouTube

    Background: navegar a la página de YouTube
        Given abro la página de YouTube
    @youtube
    Scenario: Validar fecha de publicación reciente
        Given realicé una búsqueda de videos
        When abro los filtros de búsqueda
        And selecciono el filtro Hoy
        Then visualizo videos con fecha de publicación reciente
