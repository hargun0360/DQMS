package com.example.qwait

import android.util.Log
import android.widget.Toast
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.gms.common.api.ApiException
import com.google.android.gms.safetynet.SafetyNet
import com.google.android.gms.tasks.OnFailureListener
import com.google.android.gms.tasks.OnSuccessListener
import java.util.concurrent.Executor

class RecaptchaModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "RecaptchaModule"

    @ReactMethod
    fun createCalendarEvent(name: String, location: String) {
        Log.d("RecaptchaModule", "Create event called with name: $name and location: $location")

        Toast.makeText(reactApplicationContext, "A sample toast", Toast.LENGTH_SHORT).show();
        turnRecaptcha(reactApplicationContext.currentActivity as MainActivity)
    }

    private fun turnRecaptcha(activity: MainActivity) {
//        SafetyNet.getClient(activity).verifyWithRecaptcha("6Lf3q8MpAAAAAIQZkM9khN6yPn9R166mSyXK2-ae")
//            .addOnSuccessListener(activity as Executor, OnSuccessListener { response ->
//                // Indicates communication with reCAPTCHA service was
//                // successful.
//                val userResponseToken = response.tokenResult
////                if (response.tokenResult?.isNotEmpty() == true) {
////                    Toast.makeText(reactApplicationContext, "", Toast.LENGTH_SHORT).show();
////                }
//
//                Toast.makeText(reactApplicationContext, "Success Recaptcha", Toast.LENGTH_SHORT).show();
//            })
//            .addOnFailureListener(this as Executor, OnFailureListener { e ->
//                if (e is ApiException) {
//                    // An error occurred when communicating with the
//                    // reCAPTCHA service. Refer to the status code to
//                    // handle the error appropriately.
//                    Toast.makeText(reactApplicationContext, "ApiException", Toast.LENGTH_SHORT).show();
//                } else {
//                    Toast.makeText(reactApplicationContext, "Other Exception", Toast.LENGTH_SHORT).show();
//                }
//            })

        SafetyNet.getClient(activity).verifyWithRecaptcha("6Le0usMpAAAAANku21eFrlSwuJS36Z7DvL6oYkTo")
            .addOnSuccessListener(activity) { response ->
                Toast.makeText(reactApplicationContext, response.tokenResult, Toast.LENGTH_SHORT).show();
            }
            .addOnFailureListener(activity) { e ->
                Toast.makeText(reactApplicationContext, e.message, Toast.LENGTH_SHORT).show();
            }
    }
}