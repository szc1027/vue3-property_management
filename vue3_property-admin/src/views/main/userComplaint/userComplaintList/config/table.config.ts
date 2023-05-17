// table的配置项
export const tableConfig = {
    // showIndexColumn: true,
    // showSelectionColumn: true,
    // showExpandColumn: true,
    tableParams: {
        size: 'small',
        height: '460'
    },
    propList: [
        {
            id: 1,
            label: '标题',
            prop: 'title',

        },
        {
            id: 2,
            label: '内容',
            prop: 'complaintContent',

        },
        {
            id: 3,
            label: '处理状态',
            prop: 'createTime',

        },

        {
            id: 4,
            label: '操作',
            align: 'remark',
            width: 310,
            slotName: 'action'
        }
    ]
}
