import React from 'react';
import TemplateView from './TemplateView';
import {BaseComponent} from 'cms-core';
import { observer } from 'mobx-react';

@observer
class TemplateController extends BaseComponent {

    state = {

    }
    constructor(props) {
        super(props);

    }
    render() {
        const { viewModel } = this.props;
        return (
            <TemplateView/>
        )
    }
}
export default TemplateController