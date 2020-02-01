import axios from 'axios';
import * as actionTypes from './types';
import { message } from 'antd';
import base from '../api/base';
import api from '../api/endpoints';

export const retrieveUploadedImages = () => {
    return (dispatch, getstate) => {
        axios.get('./images.json').then((res) => {
            if (res && res.data) {
                dispatch(populateImages(formatImageList(res.data.entries, getstate().images.selectedImages)));
            }
            else {
                message.error('Error in retrieving images');
            }
        }).catch((e) => { message.error('Error in retrieving images', 3); });
    }
}
export const saveFavoriteImages = (images) => {
    debugger
    axios.post(base.BASE_URL.concat(api.addToFavoriteImages), { images: images }).then((res) => {
        if (res) {
            message.success(res.data);
        }
        else {
            message.error('Error in updating images');
        }
    }).catch((e) => { message.error('Error in updating images', 3); });
}

export const addToFavorite = (res) => {
    return {
        type: actionTypes.IMAGE_ADD_TO_FAVORITE,
        images: res
    }
}

export const onSelectImages = (res) => {
    return {
        type: actionTypes.IMAGE_SELECT,
        index: res
    }
}

const populateImages = (res) => {
    return {
        type: actionTypes.IMAGE_POPULATE,
        images: res
    }
}

const formatImageList = (res, selected) => {
    return res.map((img) => {
        return {
            src: img.picture,
            thumbnail: img.picture,
            id: img.id,
            isSelected: selected.map((i) => { return i.id }).includes(img.id)
        }
    })
}


