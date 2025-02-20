package com.hotelmaster.home.web.util;

import java.math.BigDecimal;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

import com.hotelmaster.po.CheckinItem;
import com.hotelmaster.po.Room;

/**
 * CheckinItemUtil
 * 
 * @
 * 
 * @Date Apr 25, 2008
 */
public class CheckinItemUtil {
	private String cimId; // uupkid
	private String cimCheckinId; // 登记单id
	private String cimRoomId; // 房间id

	/**
	 * 
	 * 从HttpServletRequest获取数据生成CheckinItem实体
	 * 
	 * @param request
	 * @return checkinItem
	 * @throws Exception
	 */
	public static CheckinItem createCheckinItem(HttpServletRequest request)
			throws Exception {
		CheckinItem checkinItem = new CheckinItem();
		if (request.getParameter("prePrice") != null) { // 考虑
			String prePrice = (String) request.getParameter("prePrice").trim();
		}
		if (request.getParameter("prctPrice") != null) { // 实际价格
			String prctPrice = (String) request.getParameter("prctPrice")
					.trim();
			checkinItem.setCimPrctPrice(new BigDecimal(prctPrice));
		}
		/*
		 * if(request.getParameter("serviceRate")!=null){ //服务费 String
		 * serviceRate=(String) request.getParameter("serviceRate").trim();
		 * checkinItem.setCimServiceRate(new BigDecimal(serviceRate)); }
		 * if(request.getParameter("addRate")!=null){ //附加费 String
		 * addRate=(String) request.getParameter("addRate").trim();
		 * checkinItem.setCimAddRate(new BigDecimal(addRate)); }
		 */

		if (request.getParameter("discount") != null) { // 折扣
			String discount = (String) request.getParameter("discount").trim();
			checkinItem.setCimDiscount(new BigDecimal(discount));
		}
		if (request.getParameter("inDateTime") != null) { // 客人入住时间
			String inDateTime = (String) request.getParameter("inDateTime")
					.trim();
			checkinItem.setCimInDatetime(Timestamp.valueOf(inDateTime));
		}
		if (request.getParameter("preOutDateTime") != null) { // 预计离开时间
			String preOutDateTime = (String) request.getParameter(
					"preOutDateTime").trim();
			checkinItem.setCimOutDatetime(Timestamp.valueOf(preOutDateTime));
		}
		return checkinItem;
	}

	public static List createCheckinItemList(JSONArray jsonArray) {
		Iterator iterator = jsonArray.iterator();
		JSONObject jsonObject = new JSONObject();
		List<CheckinItem> checkinItemList = new ArrayList();
		while (iterator.hasNext()) {
			jsonObject = JSONObject.fromObject(iterator.next());// {}
			CheckinItem checkinItem = new CheckinItem();
			Room room = new Room();
			// room=
			// checkinItem.setRoom(room);
			checkinItem.setCimPrctPrice(new BigDecimal(jsonObject
					.getString("rmSetPrctPrice")));
			checkinItem.setCimDiscount(new BigDecimal(jsonObject
					.getString("rmSetPrctDiscount")));
		}
		return null;
	}
}
