package com.example.qwait

import android.widget.Toast
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.gms.safetynet.SafetyNet

class RecaptchaModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "RecaptchaModule"

    @ReactMethod
    fun createCalendarEvent(promise: Promise) {
        Toast.makeText(reactApplicationContext, "A sample toast", Toast.LENGTH_SHORT).show()

        turnRecaptcha(reactApplicationContext.currentActivity as MainActivity, promise)
    }

    private fun turnRecaptcha(activity: MainActivity, promise: Promise) {
        SafetyNet.getClient(activity)
            .verifyWithRecaptcha("6Le0usMpAAAAANku21eFrlSwuJS36Z7DvL6oYkTo")
            .addOnSuccessListener(activity) { response ->
                try {
                    promise.resolve(response.tokenResult)
                } catch (e: Throwable) {
                    promise.reject("Create Event Error", e)
                }
            }
            .addOnFailureListener(activity) { e ->
                promise.reject("Create Event Error", e)
            }
    }
}