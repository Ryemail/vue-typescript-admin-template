export default {
    card: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, // 身份证号

    phone: /^((13[0-9])|(14[5,7])|(15[0-3,5-9])|(17[0,3,5-9])|(18[0-9])|166|198|199|191|(147))\\d{8}$/, // 手机号

    email: /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/, //邮箱

    /**
     *
     * @param str：string
     * @param first：number
     * @param last：number
     * @param len：number
     */
    hideValue(str: string, first = 0, last = 0, len = 0) {
        const reg = new RegExp(
            '((\\d|[\u4E00-\u9FA5]){' + first + '})(\\d|[\u4E00-\u9FA5])+((\\d|X|x|[\u4E00-\u9FA5]){' + last + '})'
        );

        const starLen = str.length - first - last,
            result = str.replace(reg, `$1${new Array(len || starLen).fill('*').join('')}$4`);

        return result;
    },
};
