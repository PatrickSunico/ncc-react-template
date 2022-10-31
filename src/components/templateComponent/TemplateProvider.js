import React from 'react';
import { inject } from 'mobx-react';
import TemplateController from './TemplateController';
import TemplateViewModel from './TemplateViewModel';
import RootStore from '../../models/RootStore';

@inject(RootStore.type.TEMPLATE_MODEL)
class TemplateProvider extends React.Component {
    constructor(props) {
        super(props)
        const model = props[RootStore.type.TEMPLATE_MODEL]
        this.viewModel = new TemplateViewModel(model)
    }
    render() {
        return (      
            <TemplateController viewModel={this.viewModel}/>
        );
    }
}

export default TemplateProvider 