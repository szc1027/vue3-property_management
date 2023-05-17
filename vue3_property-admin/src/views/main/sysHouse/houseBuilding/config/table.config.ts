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
            label: '栋数名称',
            prop: 'name',

        },
        {
            id: 2,
            label: '序号',
            prop: 'orderNum',

        },
        {
            id: 3,
            label: '栋数类型',
            prop: 'type',
            slotName: 'type'
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
