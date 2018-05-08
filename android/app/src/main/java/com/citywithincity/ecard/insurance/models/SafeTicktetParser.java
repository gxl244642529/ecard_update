package com.citywithincity.ecard.insurance.models;

import android.content.Context;

import com.citywithincity.ecard.insurance.activities.InsuranceProductDetailActivity;
import com.citywithincity.utils.ActivityUtil;
import com.damai.webview.urlparser.WebViewUrlParser;

public class SafeTicktetParser implements WebViewUrlParser {

	@Override
	public void parseUrl(Context context, String command, String[] args) {
		if(command.equals("safe_ticket")){
			InsuranceProductDetailActivity.isFromInsuranceActionActivity = true;
			String ticket = args[2];
			ActivityUtil.startActivity(context, InsuranceProductDetailActivity.class,ticket);
		}
	}

}
