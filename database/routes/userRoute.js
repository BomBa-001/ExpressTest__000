// 4) create route:
import { Router } from 'express';
import { create_user, get_user_all, get_user_pag } from '../services/userControl.js';

/**
 * @disc   - رابط: المسئولة عن التعامل مع البيانات في الجدول.
 * @route  {create_user} - لحفظ البيانات
 * @route  {get_user_all} - لجلب جميع البيانات
 * @route  {get_user_pag} - لجلب جميع البيانات بإستخدام طريقة الصفحة -pagination-
 */
const router = Router();
router.route('/')
.post(create_user)
.get(get_user_pag)
.get(get_user_all)


// export default Router().route('/').post(create_user);
export default router;
