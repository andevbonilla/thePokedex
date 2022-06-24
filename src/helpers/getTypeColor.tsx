export const getTypeColor = (type:string) => {
    switch (type) {
        case 'bug':
            return '#3ca153'

        case 'dark':
            return '#010506'

        case 'dragon':
            return '#44929e'

        case 'electric':
            return '#FFDC00'

        case 'fairy':
            return '#f71169'

        case 'fighting':
            return '#ef6b40'

        case 'fire':
            return '#FF3939'

        case 'flying':
            return '#9bb9d3'

        case 'ghost':
            return '#33346d'

        case 'grass':
            return '#23d750'

        case 'ground':
            return '#b0742c'

        case 'ice':
            return '#9be7f3'

        case 'normal':
            return 'gray'

        case 'poison':
            return '#622c8e'

        case 'physic':
            return '#ff1995'

        case 'rock':
            return '#4a190a'

        case 'steel':
            return '#171717'

        case 'water':
            return '#339FFF'

        default:
            return 'gray';
    }
}