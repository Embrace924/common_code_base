/**
 * Created by cld on 2019/07/31.
 */
import tip_data from './tip-data/tip_data.js'
import loading from './loading/loading.js'
import only_number from './input-number/only_number.js'

const directives = [
    { name: 'tip-data', directive: tip_data },
    { name: 'loading', directive: loading },
    { name: 'only-number', directive: only_number }
];

export default {
    install(Vue) {
        directives.forEach(directive => {
            Vue.directive(directive.name, directive.directive);
        });
    }
};
