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
            field: 'name',
            label: '栋数名称',
            type: 'input'
        },
        {
            field: 'unitName',
            label: '单元名称',
            type: 'input'
        },
        {
            field: 'houseNum',
            label: '房屋编号',
            type: 'input'
        },
        {
            field: 'status',
            label: '使用状态',
            type: 'select'
        },
        {
            type: 'slot',
            slotName: 'button'
        }
    ]
}
