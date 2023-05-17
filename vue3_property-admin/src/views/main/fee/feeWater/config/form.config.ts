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
            field: 'houseNum',
            label: '房屋编号',
            type: 'input'
        },
        {
            type: 'slot',
            slotName: 'button'
        }
    ]
}
