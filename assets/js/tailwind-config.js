tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Geist Sans', 'sans-serif'],
                serif: ['EB Garamond', 'serif'],
            },
            colors: {
                brand: {
                    // PRIMARY COLORS (Navy Blue)
                    50: '#F0F2F5',
                    100: '#AEBDE0', // shade 200
                    200: '#91A0C2', // shade 300
                    300: '#7482A4', // shade 400
                    400: '#394768', // primaryLight
                    500: '#1C2A4A', // primary
                    600: '#11192C', // primaryDark
                    
                    // SECONDARY/ACCENT COLORS (Gold)
                    accent: {
                        50: '#FAF6ED', // shade 50
                        100: '#F4ECDB', // shade 100
                        200: '#E9DAB8', // shade 200
                        500: '#C9A24D', // secondary
                        600: '#D4B571', // secondaryLight (using as variant)
                        900: '#50411F', // secondaryDark
                    }
                }
            }
        }
    }
}