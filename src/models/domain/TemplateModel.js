import { observable, action, autorun } from 'mobx'
import uuid from 'uuid/v4'

class TemplateModel {
    constructor(rootStore) {
        this.rootStore = rootStore;
        this.autorun();
    }
    
    autorun = () => {
        if (this.rootStore.logValue) {
            autorun(() => {
                console.log('value to log :');
            });
        }
    }
}

export default TemplateModel;