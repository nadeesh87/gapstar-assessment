import * as actionTypes from '../action/types';
import { updateObject } from './utility';
import _ from "lodash";

const initialState = {
    selectedImages: [],
    allImages: [],
    remainingImages: []
};

const webSocketReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.IMAGE_SELECT: return selectImages(state, action);        
        case actionTypes.IMAGE_DESELECT: return deselectImages(state, action);
        case actionTypes.IMAGE_POPULATE: return populateImages(state, action);
        case actionTypes.IMAGE_ADD_TO_FAVORITE: return addToFavorite(state, action);
        default:
            return state;
    }
};

const selectImages = (state, action) => {
    const updatedState = {
        allImages: _.set(state.allImages, '[' + action.index + '].isSelected', !state.allImages[action.index].isSelected)
    }
    return updateObject(state, updatedState);
}

const deselectImages = (state, action) => {
    const updatedState = {
    }
    return updateObject(state, updatedState);
}

const populateImages = (state, action) => {
    const updatedState = {
        allImages: action.images
    }
    return updateObject(state, updatedState);
}

const addToFavorite = (state, action) => {
    const updatedState = {
        selectedImages: action.images
    }
    return updateObject(state, updatedState);
}

export default webSocketReducer;