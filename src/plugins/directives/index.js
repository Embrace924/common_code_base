/**
 * Created by cld on 2019/07/31.
 */
import tip_data from './tip-data/tip_data.js'

const directives = [{ name: 'tip-data', directive: tip_data }];

export default {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};
