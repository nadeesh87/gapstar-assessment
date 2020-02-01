import React, { Component } from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import { Layout, Button, Divider, message } from 'antd';
import * as actions from "../../action";
import { connect } from 'react-redux';
import _ from "lodash";

class ImageSelect extends Component {

    componentDidMount() {
        this.props.onRetrieveImages();
    }

    handleImageSelect = (e) => {
        debugger
        const { images } = this.props;
        const favoriteImages = this.getFavoriteImages(images);

        if (images[e].isSelected || favoriteImages.length < 9)
            this.props.onSelectImages(e);
        else
            message.warning('You have already added nine favorites')
    }

    handleOnClick = async (e) => {
        const { history, images, onAddToFavorite } = this.props;
        const favoriteImages = this.getFavoriteImages(images);
        await onAddToFavorite(favoriteImages);
        history.push('/images/favorite');
    }

    getFavoriteImages = (images) => {
        return _.filter(images, { 'isSelected': true });
    }

    render() {
        return (
            <Layout.Content style={{ padding: '10px 50px' }}>
                <div>
                    <Gallery
                        enableImageSelection={true}
                        onSelectImage={this.handleImageSelect}
                        images={this.props.images} />
                </div>
                <Divider clearing />
                <div>
                    <Button
                        type="primary"
                        onClick={this.handleOnClick}
                        block>Genarate</Button>
                </div>
            </Layout.Content>

        );
    }
}

const mapStateToProps = state => {
    return {
        images: state.images.allImages
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onRetrieveImages: () => dispatch(actions.retrieveUploadedImages()),
        onSelectImages: (index) => dispatch(actions.onSelectImages(index)),
        onAddToFavorite: (images) => dispatch(actions.addToFavorite(images)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageSelect);

