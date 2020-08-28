import Vue from 'vue';

Vue.directive('download', {
    inserted(el, binding) {
        console.log(binding);

        const { url = '', query = {} } = binding.value;

        el.onclick = function() {
            let params = '';
            if (query) {
                for (const key in query) {
                    if (query[key]) params += `${key}=${query[key]}&`;
                }
            }
            location.href = `${process.env.VUE_APP_API}${url}?${params}`;
        };
    },
});
