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
            label: '姓名',
            prop: 'loginName',

        },
        {
            id: 2,
            label: '电话',
            prop: 'phone',

        },
        {
            id: 3,
            label: '车位',
            prop: 'parkType',
            slotName: "parkType"

        },
        {
            id: 4,
            label: '所属月份',
            prop: 'payParkMonth',

        },
        {
            id: 5,
            label: '缴费状态',
            prop: 'payParkStatus',
            slotName: "payParkStatus"
        },

        {
            id: 6,
            label: '操作',
            align: 'remark',
            width: 310,
            slotName: 'action'
        }
    ]
}
