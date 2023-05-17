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
            label: '报修内容',
            prop: 'repairContent',

        },
        {
            id: 2,
            label: '报修地址',
            prop: 'repairAddress',

        },
        {
            id: 3,
            label: '联系电话',
            prop: 'phone',

        },
        {
            id: 4,
            label: '处理状态',
            prop: 'status',
            slotName: "status"

        },
        {
            id: 5,
            label: '操作',
            align: 'remark',
            width: 310,
            slotName: 'action'
        }
    ]
}
