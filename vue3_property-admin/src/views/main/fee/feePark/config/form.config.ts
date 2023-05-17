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
            field: 'parkName',
            label: '车位名称',
            type: 'input'
        },
        {
            type: 'slot',
            slotName: 'button'
        }
    ]
}
