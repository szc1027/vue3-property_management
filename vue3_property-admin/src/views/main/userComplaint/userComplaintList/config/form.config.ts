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
            field: 'title',
            label: '标题',
            type: 'input'
        },
        {
            field: 'complaintContent',
            label: '内容',
            type: 'input'
        },

        {
            type: 'slot',
            slotName: 'button'
        }
    ]
}
