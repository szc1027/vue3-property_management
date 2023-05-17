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
            label: '栋数',
            prop: 'name',

        },
        {
            id: 4,
            label: '单元',
            prop: 'unitName',

        },
        {
            id: 5,
            label: '房屋编号',
            prop: 'houseNum',

        },
        {
            id: 6,
            label: '缴费金额',
            prop: 'payPowerMoney',

        },
        {
            id: 7,
            label: '所属月份',
            prop: 'payPowerMonth',

        },
        {
            id: 8,
            label: '表显',
            prop: 'powerNum',

        },
        {
            id: 9,
            label: '缴费状态',
            prop: 'payPowerStatus',
            slotName:"payPowerStatus"
        },

        {
            id: 10,
            label: '操作',
            align: 'remark',
            width: 310,
            slotName: 'action'
        }
    ]
}
