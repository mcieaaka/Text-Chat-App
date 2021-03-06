import 'dart:io';

import 'package:flutter/material.dart';
// import 'package:http/http.dart';
import 'package:url_launcher/url_launcher.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Node server demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.teal,
      ),
      home: Scaffold(
        appBar: AppBar(title: Text('EZ CHAT')),
        body: BodyWidget(),
      ),
    );
  }
}

class BodyWidget extends StatefulWidget {
  @override
  BodyWidgetState createState() {
    return new BodyWidgetState();
  }
}

class BodyWidgetState extends State<BodyWidget> {
  String serverResponse = 'Click here to Login/ SignUp using Google';

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(32.0),
      child: Align(
        alignment: Alignment.topCenter,
        child: SizedBox(
          width: 200,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Text(serverResponse),
              ),
              ElevatedButton(
                child: Text('Login'),
                onPressed: () {
                  _makeGetRequest();
                },
              ),
            ],
          ),
        ),
      ),
    );
  }

  _makeGetRequest() async {
    String url = _localhost();
    launch(url);
  }

  String _localhost() {
    if (Platform.isAndroid)
      return 'http://10.0.2.2:3000/login';
    else // for iOS simulator
      return 'http://localhost:3000';
  }
}
