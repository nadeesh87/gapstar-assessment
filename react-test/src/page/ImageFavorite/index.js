import React, { Component } from 'react';
import * as actions from "../../action";
import { connect } from 'react-redux';
import _ from "lodash";
import Grid from '../../component/DragableGrid/Grid'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'
import { Layout, Divider, Button } from 'antd';

class ImageFavorite extends Component {

    componentDidMount() {
        // this.props.onRetrieveImages();
    }

    handleImageSelect = (e) => {
        console.log(this.props.images[e])
        this.props.onSelectImages(e);
    }

    handleOnClick = async (e) => {
        const { selectedImages } = this.props;
        actions.saveFavoriteImages(selectedImages);
    }

    render() {
        return (
            <Layout.Content>
                <DndProvider backend={Backend}>
                    <Grid images={this.props.selectedImages} updateOrder={this.props.onAddToFavorite} />
                </DndProvider>
                <Divider clearing />
                <div style={{ background: '#fff', textAlign: 'center' }}>
                    <Button
                        type="primary"
                        onClick={this.handleOnClick}
                    >Save</Button>
                </div>
            </Layout.Content>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedImages: state.images.selectedImages
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onRetrieveImages: () => dispatch(actions.retrieveUploadedImages()),
        //onSaveFavoriteImages: (images) => dispatch(actions.saveFavoriteImages(images)),
        onAddToFavorite: (images) => dispatch(actions.addToFavorite(images)),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageFavorite);

