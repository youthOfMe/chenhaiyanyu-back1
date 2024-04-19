// 对外暴露路由(常量路由)
export const constantRoute = [
  {
    path: '/login',
    component: () => import('@/views/login-view/LoginView.vue'),
    name: 'login', // 命名路由
    meta: {
      title: '登录',
      hidden: true,
      icon: 'Promotion', // 菜单文字左侧的图标, 支持element-plus的全部图标
    },
  },
  {
    // 登录成功以后展示数据的路由
    path: '/',
    component: () => import('@/layout/Index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home-view/HomeView.vue'),
        meta: {
          title: '主页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
    meta: {
      title: '',
      hidden: false,
      icon: '',
    },
  },
  {
    path: '/screen',
    component: () => import('@/views/screen-view/ScreenView.vue'),
    name: 'Screen',
    meta: {
      title: '数据大屏',
      hidden: false,
      icon: 'Platform',
    },
  },

  {
    path: '/officGood',
    component: () => import('@/layout/Index.vue'),
    name: 'officGood',
    meta: {
      title: '官方商品',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/officGood/officCom',
    children: [
      {
        path: '/officGood/officCom',
        component: () => import('@/views/official-merchandise/offic-product/OfficProduct.vue'),
        name: 'OfficCom',
        meta: {
          title: '商品管理',
          hidden: false,
          icon: 'Goods',
        },
      },
      {
        path: '/officGood/officSort',
        component: () => import('@/views/official-merchandise/offic-sort/OfficeSort.vue'),
        name: 'OfficSort',
        meta: {
          title: '分类管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/officGood/officPackage',
        component: () => import('@/views/official-merchandise/offic-package/OfficPackage.vue'),
        name: 'OfficPackage',
        meta: {
          title: '套餐管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
      {
        path: '/officGood/officStore',
        component: () => import('@/views/official-merchandise/offic-store-config/OfficStore.vue'),
        name: 'OfficStore',
        meta: {
          title: '店铺配置',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },

  {
    path: '/thirdGood',
    component: () => import('@/layout/Index.vue'),
    name: 'thirdGood',
    meta: {
      title: '第三方商品',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/thirdGood/thirdCom',
    children: [
      {
        path: '/thirdGood/thirdCom',
        component: () => import('@/views/third-part-product/third-product/ThirdProduct.vue'),
        name: 'ThirdCom',
        meta: {
          title: '商品管理',
          hidden: false,
          icon: 'Goods',
        },
      },
      {
        path: '/thirdGood/thirdSort',
        component: () => import('@/views/third-part-product/third-sort/ThirdSort.vue'),
        name: 'ThirdSort',
        meta: {
          title: '分类管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/thirdGood/thirdPackage',
        component: () => import('@/views/third-part-product/third-package/ThirdPackage.vue'),
        name: 'ThirdPackage',
        meta: {
          title: '套餐管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },

  {
    path: '/programGood',
    component: () => import('@/layout/Index.vue'),
    name: 'programGood',
    meta: {
      title: '程序商品',
      hidden: false,
      icon: 'Goods',
    },
    redirect: '/programGood/comManage',
    children: [
      {
        path: '/programGood/comManage',
        component: () => import('@/views/program-good/com-manage/ComManage.vue'),
        name: 'ComManage',
        meta: {
          title: '商品管理',
          hidden: false,
          icon: 'Goods',
        },
      },
      {
        path: '/programGood/sortManage',
        component: () => import('@/views/program-good/sort-manage/SortManage.vue'),
        name: 'SortManage',
        meta: {
          title: '分类管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/programGood/packageManage',
        component: () => import('@/views/program-good/package-manage/PackageManage.vue'),
        name: 'PackageManage',
        meta: {
          title: '套餐管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },

  {
    path: '/acl',
    component: () => import('@/layout/Index.vue'),
    name: 'Acl',
    meta: {
      title: '权限管理',
      hidden: false,
      icon: 'Lock',
    },
    redirect: '/acl/user',
    children: [
      {
        path: '/acl/user',
        component: () => import('@/views/acl/user/Index.vue'),
        name: 'Acl',
        meta: {
          title: '用户管理',
          hidden: false,
          icon: 'User',
        },
      },
      {
        path: '/acl/role',
        component: () => import('@/views/acl/role/Index.vue'),
        name: 'Role',
        meta: {
          title: '角色管理',
          hidden: false,
          icon: 'UserFilled',
        },
      },
      {
        path: '/acl/permission',
        component: () => import('@/views/acl/permission/Index.vue'),
        name: 'Permission',
        meta: {
          title: '菜单管理',
          hidden: false,
          icon: 'Monitor',
        },
      },
    ],
  },
  {
    path: '/product',
    component: () => import('@/layout/Index.vue'),
    name: 'Product',
    meta: {
      title: '商品管理',
      icon: 'Goods',
      hidden: false,
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        component: () => import('@/views/acl/role/Index.vue'),
        name: 'Trademark',
        meta: {
          title: '品牌管理',
          icon: 'ShoppingCartFull',
          hidden: false,
        },
      },
      {
        path: '/product/attr',
        component: () => import('@/views/product/attr/Index.vue'),
        name: 'Attr',
        meta: {
          title: '属性管理',
          icon: 'ChromeFilled',
          hidden: false,
        },
      },
      {
        path: '/product/spu',
        component: () => import('@/views/product/spu/Index.vue'),
        name: 'Spu',
        meta: {
          title: 'SPU管理',
          icon: 'Calendar',
          hidden: false,
        },
      },
      {
        path: '/product/sku',
        component: () => import('@/views/product/sku/Index.vue'),
        name: 'Sku',
        meta: {
          title: 'SKU管理',
          icon: 'Orange',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/employee',
    component: () => import('@/layout/Index.vue'),
    name: 'employee',
    meta: {
      title: '员工管理',
      icon: 'Goods',
      hidden: false,
    },
    redirect: '/employee/info',
    children: [
      {
        path: '/employee/info',
        component: () => import('@/views/employee-manage/employee-message/EmployeeMessage.vue'),
        name: 'employee-info',
        meta: {
          title: '基础信息',
          icon: 'ShoppingCartFull',
          hidden: false,
        },
      },
      {
        path: '/employee/manage',
        component: () => import('@/views/employee-manage/employee-role/EmployeeRole.vue'),
        name: 'employee-manage',
        meta: {
          title: '角色管理',
          icon: 'UserFilled',
          hidden: false,
        },
      },
      {
        path: '/employee/limit',
        component: () => import('@/views/employee-manage/employee-limit/EmployeeLimit.vue'),
        name: 'employee-limit',
        meta: {
          title: '权限管理',
          icon: 'Monitor',
          hidden: false,
        },
      },
    ],
  },

  {
    path: '/apply',
    component: () => import('@/layout/Index.vue'),
    name: 'Apply',
    meta: {
      title: '应用配置',
      icon: 'Goods',
      hidden: false,
    },
    redirect: '/apply/note/',
    children: [
      {
        path: '/apply/note',
        component: () => import('@/views/apply-set/note-set/NoteSet.vue'),
        name: 'note',
        meta: {
          title: '公告配置',
          icon: 'UserFilled',
          hidden: false,
        },
      },
      {
        path: '/apply/message',
        component: () => import('@/views/apply-set/message-set/MessageSet.vue'),
        name: 'message',
        meta: {
          title: '信息配置',
          icon: 'ShoppingCartFull',
          hidden: false,
        },
      },
      
    ],
  },
  {
    path: '/404',
    component: () => import('@/views/not-found/NotFound.vue'),
    name: '404',
    meta: {
      title: '404',
      hidden: true,
      icon: 'ChatDotSquare',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found',
    name: 'any',
    meta: {
      title: '任意路由',
      hidden: true,
      icon: 'Bill',
    },
  },
  
]
