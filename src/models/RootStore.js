
import TemplateModel from './domain/TemplateModel';

class RootStore {
    static type = {
        TEMPLATE_MODEL: 'templateModel'
    }

    constructor(logValue, backendurl) {
        logValue = logValue || false;
        backendurl = backendurl || "";
        this.logValue = logValue;
        this.backendurl = backendurl;
        this.templateModel = new TemplateModel(this);
    }

    getStores = () => ({
        [RootStore.type.TEMPLATE_MODEL]: this.templateModel
    })
}

export default RootStore