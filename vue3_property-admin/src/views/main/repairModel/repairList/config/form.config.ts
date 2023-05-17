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
            field: 'repairContent',
            label: '报修内容',
            type: 'input'
        },

        {
            type: 'slot',
            slotName: 'button'
        }
    ]
}
