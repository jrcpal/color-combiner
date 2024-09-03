import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedColors: [],
    combinedColor: ''
};

const mixColors = (colors) => {
    if (colors.length === 2) {
        const [color1, color2] = colors.map(color => color.substring(1));
        const r1 = parseInt(color1.substring(0, 2), 16);
        const g1 = parseInt(color1.substring(2, 4), 16);
        const b1 = parseInt(color1.substring(4, 6), 16);
        const r2 = parseInt(color2.substring(0, 2), 16);
        const g2 = parseInt(color2.substring(2, 4), 16);
        const b2 = parseInt(color2.substring(4, 6), 16);

        const r = Math.round((r1 + r2) / 2).toString(16).padStart(2, '0');
        const g = Math.round((g1 + g2) / 2).toString(16).padStart(2, '0');
        const b = Math.round((b1 + b2) / 2).toString(16).padStart(2, '0');

        return `#${r}${g}${b}`;
    }
    return '';
}

const colorSlice = createSlice({
    name: 'colors',
    initialState,
    reducers: {
        selectColor(state, action) {
            if (state.selectedColors.length < 2) {
                state.selectedColors.push(action.payload);
            }
        },
        combineColors(state) {
            state.combinedColor = mixColors(state.selectedColors);
        },
        resetColors(state) {
            state.selectedColors = [];
            state.combinedColor = '';
        }
    }
})

export const { selectColor, combineColors, resetColors } = colorSlice.actions;
export default colorSlice.reducer;