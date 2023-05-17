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
            field: 'parkName',
            label: '车位名称',
            type: 'input'
        },
        {
            field: 'parkType',
            label: '车位类型',
            type: 'select'
        },
        {
            field: 'parkStatus',
            label: '使用状态',
            type: 'select'
        },
        {
            type: 'slot',
            slotName: 'button'
        }
    ]
}
