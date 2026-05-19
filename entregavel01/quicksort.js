function quicksort(array) {
    if (array.length <= 1) return array;

    const pivo = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivo) left.push(array[i]);
        else right.push(array[i]);
    }

    return [...quicksort(left), pivo, ...quicksort(right)];
}

