//META{"name":"stereoSound"}*//

var stereoSound = function () {

	let VoiceConnection = BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection;

	class Stereo extends VoiceConnection {
		constructor(a, b, c, d, e) {
			super(a, b, c, d, e);
			this.origin = super.setTransportOptions;
		}
		setTransportOptions(obj) {
			if (obj.audioEncoder) {
				obj.audioEncoder.params = { stereo: "2" };
				obj.audioEncoder.channels = 2;
				
			}
			if (obj.fec) {
				obj.fec = false;
				

			}
			if (obj.encodingVoiceBitRate < 960000) {
				obj.encodingVoiceBitRate = 960000;
				
			}
			
			

			this.origin(obj);
			window.sound = this;
		}
	}

	return class _ {
		getName() { return "END EM JAYDEN" }
		getDescription() { return " GG END EM ALL" }
		getAuthor() { return "$$$" }
		getVersion() { return "1" }

		load() { }

		start() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = Stereo;
		}

		stop() {
			BDV2.WebpackModules.findByUniqueProperties(['getVoiceEngine']).getVoiceEngine().VoiceConnection = VoiceConnection;
		}
	};
}();