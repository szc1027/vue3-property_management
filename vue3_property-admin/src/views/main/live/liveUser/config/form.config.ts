export const formConfig = {
    formParams: {
        // size: 'small',
        // labelWidth: '100px',
        inline: true
    },
    colLayout: {
        span: 12
    },
    itemStyle: {
        // padding: '100px'
    },
    formList: [
        {
            field: 'loginName',
            label: '姓名',
            type: 'input'
        },
        {
            field: 'phone',
            label: '电话',
            type: 'select'
        },

        {
            type: 'slot',
            slotName: 'button'
        }
    ]
}
