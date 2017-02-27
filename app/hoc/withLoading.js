import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';

type SpinnerType = {
  isLoading: Bool
}

/**
 * Create client app HOC.
 *
 * @param {JSXElement} WrappedComponent The wrapped component
 * @returns {JSXElement}
 */
const withLoading = (WrappedComponent:Object):Function => {
  
  return class extends Component {
    
    props: SpinnerType;
    
    /**
     * Constructor
     * @param {Object} props the props
     */
    constructor (props) {
      super(props);
    }
    
    /**
     * Render spinner.
     *
     * @return {JSXElement}
     */
    renderSpinner() {
      return (
        <ActivityIndicator
          animating={this.props.isLoading}
          size="large"
        />
      )
    }
    
    /**
     * Render.
     * 
     * @return {JSXElement}
     */
    render ():Object {
      return (
        <View>
          <WrappedComponent {...this.props}/>
          {this.renderSpinner()}
        </View>
      )
    }
  }
}

export default withLoading;