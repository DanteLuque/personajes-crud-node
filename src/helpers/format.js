function formatGender(genero) {
    if (genero === 'F') return 'Femenino';
    if (genero === 'M') return 'Masculino';
    return 'No especificado';
}

export { 
    formatGender
};