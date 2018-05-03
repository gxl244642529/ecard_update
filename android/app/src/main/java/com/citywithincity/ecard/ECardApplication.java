package com.citywithincity.ecard;

import android.app.Activity;
import android.content.Context;
import android.content.DialogInterface;
import android.content.DialogInterface.OnDismissListener;
import android.content.Intent;
import android.os.Build;

import com.citywithincity.ecard.enums.Actions;
import com.citywithincity.ecard.interfaces.IECardJsonTaskManager;
import com.citywithincity.ecard.models.ECardJsonManager;
import com.citywithincity.ecard.models.TianYu;
import com.citywithincity.ecard.models.TianYu.ITianyuModel;
import com.citywithincity.ecard.pay.ECardPay;
import com.citywithincity.ecard.pay.PayTypes;
import com.citywithincity.ecard.pay.cmbpay.CMBPay;
import com.citywithincity.ecard.pay.umapay.UMAPay;
import com.citywithincity.ecard.push.PushImpl;
import com.citywithincity.ecard.utils.NfcUtil;
import com.citywithincity.interfaces.IViewContainer;
import com.citywithincity.models.LruImageCache;
import com.citywithincity.models.http.JsonTaskManager;
import com.citywithincity.paylib.ECardPayModel;
import com.citywithincity.utils.Alert;
import com.citywithincity.utils.DefaultLocalDataUtil;
import com.citywithincity.utils.PackageUtil;
import com.damai.auto.DMApplication;
import com.damai.auto.LifeManager;
import com.damai.core.DMServers;
import com.damai.core.HttpJob;
import com.damai.core.JobManagerImpl;
import com.damai.core.PhpServerHandler;
import com.damai.dl.PluginManager;
import com.damai.dl.PluginManager.IApkListener;
import com.damai.pay.AbsDMPay;
import com.damai.push.IPush;
import com.damai.widget.DownloadProgressDialog;
import com.tencent.bugly.crashreport.CrashReport;

import java.io.File;

import cn.jpush.android.api.JPushInterface;

public class ECardApplication extends DMApplication implements OnDismissListener,IApkListener, ITianyuModel {


	@Override
	public AbsDMPay createPay(int type) {
		if(type == PayTypes.PayType_CMB){
			return new CMBPay();
		}else if(type == PayTypes.PayType_ECard){
			return new ECardPay();
		}else if(type == PayTypes.PayType_UMA){
			return new UMAPay();
		}
		
		return null;
	}


	@Override
	protected boolean registerApiServerHandler(JobManagerImpl jobManager, Context context) {
        DMServers.setUrl(0, PackageUtil.getMetaValue(context, "PHP_URL"));
        DMServers.setUrl(1, PackageUtil.getMetaValue(context, "JAVA_URL"));
		jobManager.registerApiServerHandler(0,new PhpServerHandler(context));
		jobManager.registerApiServerHandler(1,new NewJavaServerHandler(context));

		return true;
	}

	@Override
	public void uncaughtException(Thread thread, Throwable ex) {
		ex.printStackTrace();
		android.os.Process.killProcess(android.os.Process.myPid());
		System.exit(0);
	}

	@Override
	protected void initApplication() {
		DefaultLocalDataUtil.setContext(getApplicationContext());
		TianYu.setModel(this);
		Actions.init(getApplicationContext());
	}


	private DownloadProgressDialog dlgDialog;
	@Override
	public void onLoadApkComplete(File file) {
		dlgDialog.dismiss();
		dlgDialog = null;
		
	}

	@Override
	public void onProgress(int total, int current) {
		dlgDialog.setProgress(total, current);
	}

	@Override
	public void onLoadStart(HttpJob job) {
		dlgDialog = new DownloadProgressDialog(LifeManager.getActivity(), job);
	}

	@Override
	public void onLoadError() {
		// TODO Auto-generated method stub
		
	}
	
	@Override
	public void onCreate() {
		super.onCreate();


		if (isEmulator()) {
			android.os.Process.killProcess(android.os.Process.myPid());
		}


		DefaultLocalDataUtil.setContext(getApplicationContext());
		Alert.setApplicationContext(getApplicationContext());
		JsonTaskManager.javaServerUrl = PackageUtil.getMetaValue(getApplicationContext(), "JAVA_URL") + "/api/";
		ECardConfig.JAVA_SERVER = JsonTaskManager.javaServerUrl;
		IECardJsonTaskManager platform = ECardJsonManager.getInstance();
		ECardConfig.BASE_URL = PackageUtil.getMetaValue(getApplicationContext(), "PHP_URL");
		ECardConfig.API_URL = ECardConfig.BASE_URL + "/api2/";

		ECardConfig.PICC = PackageUtil.getMetaValue(getApplicationContext(), "PICC");

		platform.setBaseUrl(ECardConfig.API_URL);
		platform.setApplication(this);
		platform.setImageCache(new LruImageCache());

		CrashHandler crashHandler = CrashHandler.getInstance();
		crashHandler.init(getApplicationContext());
		crashHandler.setUploader(new ECardCrashUploader());

	//	Alert.setOnDismissListener(this);

		JPushInterface.setDebugMode(false); // 设置开启日志,发布时请关闭日志
		JPushInterface.init(this); // 初始化 JPush

//		MessageUtil.init();

		ECardPayModel.WEIXIN_APPID = ECardConfig.WEIXIN_APPID;

		// platform.clearSession();

		CrashReport.initCrashReport(getApplicationContext(), "4ee5827505", true);
	}

    @Override
    protected IPush createPush() {
        return new PushImpl(getApplicationContext());
    }

    public boolean isEmulator() {
		// model:Android SDK built for x86
		// 只要是在模拟器中，不管是什么版本的模拟器，在它的MODEL信息里就会带有关键字参数sdk
		return Build.MODEL.contains("sdk") || Build.MODEL.contains("SDK");
	}

	@Override
	public void onDismiss(DialogInterface arg0) {
		ECardJsonManager.getInstance().cancelRequest();
	}




	@Override
	public void startTyModule(Activity context, String moduleName, Intent intent,int requestCode) {
		PluginManager.getInstance().startApkModule(TianYu.COMP_NAME, moduleName,intent,requestCode,this);
	}
}
